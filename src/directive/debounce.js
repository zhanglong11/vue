export default {
  inserted: function(el, binding) {
    let wait = 500;
    let fn;
    let options = {};
    if (typeof binding.value === "function") {
      fn = binding.value;
    }
    if (typeof binding.value === "object") {
      fn = binding.value.fn;
      wait = binding.value.wait;
      options = binding.value.options;
    }
    el.addEventListener(
      "click",
      _.throttle(function() {
        fn(options);
      }, wait)
    );
  }
};
