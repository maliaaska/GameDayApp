var map = {
    'angular2-click-to-edit': 'node_modules/angular2-click-to-edit',
    }


    var packages = {
    'angular2-click-to-edit': { main: 'index' }  
 }

 (function (global) {
    System.config({
      paths: {
        'npm:': 'node_modules/'
      },
      map: {
        app: 'app',
   
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
   
        'rxjs':                      'npm:rxjs',
        'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
   
        // Add this line (1/2) 
        'angular2-fontawesome': 'node_modules/angular2-fontawesome',
      },
      packages: {
        app: {
          main: './main.js',
          defaultExtension: 'js'
        },
        rxjs: {
          defaultExtension: 'js'
        },
        'angular-in-memory-web-api': {
          main: './index.js',
          defaultExtension: 'js'
        },
   
        // Add this line (2/2) 
        'angular2-fontawesome': { defaultExtension: 'js' }
      }
    });
  })(this);
   