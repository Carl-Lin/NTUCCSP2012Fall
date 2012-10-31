var obj = {
  fn : function() {console.log(this)}  
};
obj.fn();
//obj.fn.call();
//obj.fn.apply();
var tmpfn = obj.fn;
tmpfn();