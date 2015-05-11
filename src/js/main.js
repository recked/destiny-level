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

			$helmet.find('select[name=class]').change(function() {
				var item = this.value,
						size = types[item].length,
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

			});



})();
