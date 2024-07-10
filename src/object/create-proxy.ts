/**
 * Creates a proxy for an object with specified handlers.
 * @param obj - The object to create a proxy for.
 * @param handlers - The handlers for the proxy.
 * @returns The proxy object.
 */
const createProxy = <T extends object>(
  obj: T,
  handlers: ProxyHandler<T>
): T => {
  return new Proxy(obj, handlers);
};

export default createProxy;
