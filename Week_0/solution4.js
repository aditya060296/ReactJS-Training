function trackFunction(fn) {
  let invocationCount = 0;
  let instanceCount = 0;

  function trackedFunction(...args) {
    invocationCount++;
    return fn(...args);
  }

  instanceCount++;

  return {
    trackedFunction,
    getInvocationCount: () => invocationCount,
    getInstanceCount: () => instanceCount
  };
}

// Example:

function add(a, b) {
  return a + b;
}

const trackedAdd = trackFunction(add);

console.log(trackedAdd.trackedFunction(3, 3)); // 6
console.log(trackedAdd.trackedFunction(5, 5)); // 10

console.log("Invocation Count:", trackedAdd.getInvocationCount()); // 2
console.log("Instance Count:", trackedAdd.getInstanceCount()); // 1
