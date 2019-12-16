angular
  .module("fish-pond")
  .controller("FishTableCtrl", function() {
    this.showDescription = false;
    this.toggleDescription = () => {
      this.showDescription = !this.showDescription;
    };
  })
  .component("fishTableRow", {
    bindings: {
      fish: "<"
    },
    controller: "FishTableCtrl",
    template: `
    <div ng-click="$ctrl.toggleDescription()" ng-repeat=""fish in $ctrl.this.fishes track by $index">
      <span class="fish-name">Nemo</span>
      <span>
        <img  ng-src="{{$ctrl.this.fishes.image}}" />
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">Does anyone know where my dad is?</span>
    </div>`
  });
