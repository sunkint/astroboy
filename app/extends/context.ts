/**
 * 扩展 Koa Context 对象
 */
import * as assert from 'assert';
import { IPureAstroboyContext, IAstroboyCtxExtends } from '../../definitions/extends/context';

const ctxExtends: IAstroboyCtxExtends<any> = {
  getConfig(this: IPureAstroboyContext<any>, ...args: any[]) {
    return this.app.getConfig(...args);
  },

  getServiceClass(this: IPureAstroboyContext<any>, ...args: any[]) {
    return this.app.getServiceClass(...(<[string, string]>args));
  },

  getService(this: IPureAstroboyContext<any>, packageName: any, serviceName: any) {
    assert(packageName, 'Package name cannot be empty!');
    assert(serviceName, 'Service name cannot be empty!');
    if (this.app.services && this.app.services[packageName] && (this.app.services[packageName] as any)[serviceName]) {
      const ServiceClass = (this.app.services[packageName] as any)[serviceName];
      return new ServiceClass(this);
    } else {
      throw new Error(`Service ${packageName} ${serviceName} is not found.`);
    }
  },

  async callService(this: IPureAstroboyContext<any>, service: string, method: string, ...args: any[]) {
    const keys = service.split('/');
    let packageName: string = undefined!;
    let serviceName: string = undefined!;
    if (keys.length === 2) {
      packageName = keys[0];
      serviceName = keys[1];
    } else if (keys.length === 1) {
      packageName = this.app.ROOT_NAME;
      serviceName = keys[0];
    }
    if (this.app.services && this.app.services[packageName] && this.app.services[packageName][serviceName]) {
      const ServiceClass = this.app.services[packageName][serviceName];
      const service = new ServiceClass(this);
      if (service[method]) {
        return await service[method](...args);
      } else {
        throw new Error(`method name ${method} is not found.`);
      }
    } else {
      throw new Error(`Service ${packageName} ${serviceName} is not found.`);
    }
  },

  invokeServiceMethod(
    this: IPureAstroboyContext<any>,
    pkgName: any,
    serviceName: any,
    methodName: any,
    ...args: any[]
  ) {
    if (this.app.services && this.app.services[pkgName] && (<any>this.app.services[pkgName])[serviceName]) {
      const ServiceClass = (<any>this.app.services[pkgName])[serviceName];
      const service = new ServiceClass(this);
      if (service[methodName]) {
        return service[methodName](...args) as any;
      } else {
        throw new Error(`method name ${methodName} is not found.`);
      }
    } else {
      throw new Error(`Service ${pkgName} ${serviceName} is not found.`);
    }
  },

  getLib(this: IPureAstroboyContext<any>, ...args: any[]) {
    return this.app.getLib(...(<[string, string]>args));
  },
};

export = ctxExtends;
