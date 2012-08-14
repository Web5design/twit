/*
**
** Plugin Author References 
** http://remysharp.com/2010/06/03/signs-of-a-poorly-written-jquery-plugin/
** http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns
** https://github.com/addyosmani/jquery-plugin-patterns
*
*/

//the semi-colon before the function invocation is a safety
//net against concatenated scripts and/or other plugins
//that are not closed properly.

//Here, we’ve wrapped our plugin logic in an anonymous function.
//To ensure that our use of the $ sign as a shorthand creates no
//conflicts between jQuery and other JavaScript libraries, we simply
//pass it to this closure, which maps it to the dollar sign, thus
//ensuring that it can’t be affected by anything outside of its
//scope of execution.

;(function( $, window, document, undefined ){
  // Create the defaults once
  var pluginName = 'twit',
      // default options
      defaults = {
        'property' : 'value',
      };

  // undefined is used here as the undefined global 
  // variable in ECMAScript 3 and is mutable (i.e. it can 
  // be changed by someone else). undefined isn't really 
  // being passed in so we can ensure that its value is 
  // truly undefined. In ES5, undefined can no longer be 
  // modified.
    
  // window and document are passed through as local 
  // variables rather than as globals, because this (slightly) 
  // quickens the resolution process and can be more 
  // efficiently minified (especially when both are 
  // regularly referenced in your plugin).

  // Create the defaults once
  function Plugin( element, options ) {
    this.element = element;

    // jQuery has an extend method that merges the 
    // contents of two or more objects, storing the 
    // result in the first object. The first object 
    // is generally empty because we don't want to alter 
    // the default options for future instances of the plugin
    this.options = $.extend( {}, defaults, options);

    this._defaults = defaults;
    this._name     = pluginName;
    this.init();
  }

  // The actual plugin constructor
  Plugin.prototype.init = function() {
    // Place initialization logic here
    // You already have access to the DOM element and
    // the options via the instance, e.g. this.element 
    // and this.options

    // this is the element we are doing stuff to
    $(this.element);

  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function( options ) {
    return this.each(function (){
      if(!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName,
          new Plugin( this, options ));
      }
    });
  };

})( jQuery, window, document );