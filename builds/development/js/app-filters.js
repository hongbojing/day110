/**
 * Created by hongboing on 10/12/15.
 */
//angular
//    .module('myApp.filters', [])
//    .filter('capitalize', function() {
//        return function(input) {
//            if(input) {
//                return input[0].toUpperCase() + input.slice(1);
//            }
//        }
//    });
angular
    .module('myApp.filters', [])
    .filter('capitalize', capitalize);

function capitalize() {
    return function(input) {
        if(input) {
            return input[0].toUpperCase() + input.slice(1);
        }
    }
}
//john papa style