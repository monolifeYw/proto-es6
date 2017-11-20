'use strict';

(function () {
 
  class Module {
    constructor(name) {
      this.name = name;
    }

    getName() {
      return this.name.toUpperCase();
    }

    work() {
      console.log('Work', this, this.name);
    }

    static reverseName(username) {
      return username.split('').reverse().join('');
    }
  }

  let ModuleClass = class ModuleClass {

  }

  console.log('Module', Module);
  console.log('ModuleClass', ModuleClass);

  let m = new Module('lee');

  console.log(m, m.getName(), Module.reverseName('park'));

  console.log('=========================');

  let ExtendClass = class ExtendClass extends Module {
    work() {
      console.log('super.getName', super.getName());
      console.log('Work ExtendClass', this, this.name);
    }
  }

  let extendIns = new ExtendClass('Boss');
  console.log(extendIns, extendIns.getName());
  extendIns.work();
})();











