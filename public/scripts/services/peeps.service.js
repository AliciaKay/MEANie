myApp.service('PeepsService', function ($http) {
    var sv = this;
    sv.peepsObj = {peeps: []};

    sv.peeps = {
        add: function (newPeep) {
            console.log('in addRecord:', newPeep);
            $http({
                method: 'POST',
                url: '/peeps',
                data: newPeep
            })
        },
        get: function () {
            console.log('in getRecords');
             $http({
                method: 'GET',
                url: '/peeps',
            }).then(function (response) {
                console.log('in service, back from server with:', response.data);
                //sv.peepsArray.push(response.data);
                sv.peepsObj.peeps = response.data;
                console.log('peepsArray-->', sv.peepsArray);
            });
        }
    }
});
