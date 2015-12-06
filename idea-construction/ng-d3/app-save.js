(function IFEE() {
    'use strict';
    var AppComponent = ng
        .Component({
            selector: 'ng-D3',
            template: '<h1>Data Visualization Under Angular2</h1>'
        })
        .Class({
            constructor: function () {
                //  do somthing constuctory
            }
        });

    document.addEventListener('DOMContentLoaded', function () {
      ng.bootstrap(AppComponent);
    });
}());