jQuery(function ($) {
		$.fn.countTo = function (options) {
			options = options || {};

			return $(this).each(function () {
				// set options for current element
				var settings = $.extend({}, $.fn.countTo.defaults, {
					from: $(this).data('from'),
					to: $(this).data('to'),
					speed: $(this).data('speed'),
					refreshInterval: $(this).data('refresh-interval'),
					decimals: $(this).data('decimals')
				}, options);


				var loops = Math.ceil(settings.speed / settings.refreshInterval),
					increment = (settings.to - settings.from) / loops;

				var self = this,
					$self = $(this),
					loopCount = 0,
					value = settings.from,
					data = $self.data('countTo') || {};

				$self.data('countTo', data);

				
				if (data.interval) {
					clearInterval(data.interval);
				}
				data.interval = setInterval(updateTimer, settings.refreshInterval);

				render(value);

				function updateTimer() {
					value += increment;
					loopCount++;

					render(value);

					if (typeof (settings.onUpdate) == 'function') {
						settings.onUpdate.call(self, value);
					}

					if (loopCount >= loops) {
						// remove the interval
						$self.removeData('countTo');
						clearInterval(data.interval);
						value = settings.to;

						if (typeof (settings.onComplete) == 'function') {
							settings.onComplete.call(self, value);
						}
					}
				}

				function render(value) {
					var formattedValue = settings.formatter.call(self, value, settings);
					$self.text(formattedValue);
				}
			});
		};

		$.fn.countTo.defaults = {
			from: 0, 
			to: 0, 
			speed: 1000, 
			refreshInterval: 100, 
			decimals: 0, 
			formatter: formatter, 
			onUpdate: null, 
			onComplete: null 
		};

		function formatter(value, settings) {
			return value.toFixed(settings.decimals);
		}
      
      $(".test1").click(function() {
  			$('.timer').each(count);
	 });
      // restart a timer when a button is clicked
      $('.restart').click(function (event) {
        event.preventDefault();
        var target = $(this).data('target');
        count.call($(target));
      });
      
      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
    });