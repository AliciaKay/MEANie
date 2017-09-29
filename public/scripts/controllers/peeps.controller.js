myApp.controller('WhereMyPeeps', function (PeepsService) {
    var vm = this;
    
    vm.peepsObj = PeepsService.peepsObj;

    vm.newPeep = function () {
        console.log('in newPeep');
        var peepToAdd = {
            name: vm.nameIn,
            location: vm.locationIn
        }; //end peepToAdd
        PeepsService.peeps.add(peepToAdd);
        PeepsService.peeps.get();
    }; //end whereMyPeepsAt
    vm.whereMyPeepsAt = function () {
        console.log('in whereMyPeepsAt');
        PeepsService.peeps.get();
    }; //end whereMyPeepsAt
}); // end controller
