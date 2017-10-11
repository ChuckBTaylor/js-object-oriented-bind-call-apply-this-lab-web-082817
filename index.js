function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue) {
  return fn.call(thisValue);
}

function setThisWithApply(fn, thisValue) {
  return fn.apply(thisValue);
}

function returnNewFunctionOf(fn, thisValue) {
  return fn.bind(thisValue);
}
