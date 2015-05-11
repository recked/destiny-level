(function(){
	'use strict';

	// Items
var types = {
    'vault': [
      {
        'type' : 'Raid',
        'baseLight' : 18
      }
    ],

  'tdb':[
    {
      'type' : 'Vendor',
      'baseLight' : 24
    },
    {
      'type' : 'Crota',
      'baseLight' : 30
    },
    {
      'type' : 'Exotic',
      'baseLight' : 30
    }
  ],

  'how':[
    {
      'type' : 'Vendor',
      'baseLight' : 36
    },
    {
      'type' : 'Trials of Osiris - Vendor',
      'baseLight' : 36
    },
    {
      'type' : 'Trials of Osiris - Drop',
      'baseLight' : 42
    },
    {
      'type' : 'Prison of Elders - Vendor',
      'baseLight' : 36
    },
    {
      'type' : 'Prison of Elders - Drop',
      'baseLight' : 42
    },
    {
      'type' : 'Exotic',
      'baseLight' : 42
    }
  ],
  'ib':[
    {
      'type' : 'Iron Banner',
      'baseLight' : 24
    },
    {
      'type' : 'Iron Banner - TDB',
      'baseLight' : 27
    }
  ]
};



	// Selectors
	var $helmet = $('.helmet'),
			$arms = $('.arms'),
			$chest = $('.chest'),
			$leg = $('.leg'),
			gear = [];

	var spaceMath = function(){
		$('.total-value').html('');
		var head = $helmet.find('.base-value').html() ? parseInt($helmet.find('.base-value').html(), 10) : 0,
				arms = $arms.find('.base-value').html() ? parseInt($arms.find('.base-value').html(), 10) : 0,
				chest = $chest.find('.base-value').html() ? parseInt($chest.find('.base-value').html(), 10) : 0,
				leg = $leg.find('.base-value').html() ? parseInt($leg.find('.base-value').html(), 10) : 0,
				total = head + arms + chest + leg;
				console.log(total);

		$('.total-value').html(total);
	};
			// Helmet
			$helmet.find('select[name=class]').change(function() {
				$helmet.find('.base-value').html('');
				var item = this.value;
				if(item) {
					var	size = types[item].length,
						  $select = $helmet.find('select[name=type]');

					$select.children('option.new').remove();

					for (var i = 0; i < size; i++) {
						var gear = types[item][i],
						    $option = $("<option>", {
									class: 'new',
		        			value: gear.baseLight
	    					});

						$option.html(gear.type);
						$select.append($option);
					}
				}

			});

			$helmet.find('select[name=type]').change(function() {
				var val = this.value;
				if(val) {
					$helmet.find('.base-value').html(val);
				}
				else {
					$helmet.find('.base-value').html('');
				}
				spaceMath();
			});

			// Arms
			$arms.find('select[name=class]').change(function() {
				$arms.find('.base-value').html('');
				var item = this.value;
				if(item) {
					var	size = types[item].length,
						  $select = $arms.find('select[name=type]');

					$select.children('option.new').remove();

					for (var i = 0; i < size; i++) {
						var gear = types[item][i],
						    $option = $("<option>", {
									class: 'new',
		        			value: gear.baseLight
	    					});

						$option.html(gear.type);
						$select.append($option);
					}
				}

			});
			$arms.find('select[name=type]').change(function() {
				var val = this.value;
				if(val) {
					$arms.find('.base-value').html(val);
				}
				else {
					$arms.find('.base-value').html('');
				}
				spaceMath();
			});

			// Chest
			$chest.find('select[name=class]').change(function() {
				$chest.find('.base-value').html('');
				var item = this.value;
				if(item) {
					var	size = types[item].length,
						  $select = $chest.find('select[name=type]');

					$select.children('option.new').remove();

					for (var i = 0; i < size; i++) {
						var gear = types[item][i],
						    $option = $("<option>", {
									class: 'new',
		        			value: gear.baseLight
	    					});

						$option.html(gear.type);
						$select.append($option);
					}
				}

			});
			$chest.find('select[name=type]').change(function() {
				var val = this.value;
				if(val) {
					$chest.find('.base-value').html(val);
				}
				else {
					$chest.find('.base-value').html('');
				}
				spaceMath();
			});

			// Legs
			$leg.find('select[name=class]').change(function() {
				$leg.find('.base-value').html('');
				var item = this.value;
				if(item) {
					var	size = types[item].length,
						  $select = $leg.find('select[name=type]');

					$select.children('option.new').remove();

					for (var i = 0; i < size; i++) {
						var gear = types[item][i],
						    $option = $("<option>", {
									class: 'new',
		        			value: gear.baseLight
	    					});

						$option.html(gear.type);
						$select.append($option);
					}
				}
			});

			$leg.find('select[name=type]').change(function() {
				var val = this.value;
				if(val) {
					$leg.find('.base-value').html(val);
				}
				else {
					$leg.find('.base-value').html('');
				}
				spaceMath();
			});




})();
