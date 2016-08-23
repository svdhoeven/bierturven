import {View} from 'backbone';
import _ from 'underscore';

/**
 * Object representing the Beer (type) elements
 *
 * @constructor
 */
const BeerView = View.extend({
    templateBeers: '',

    //Custom events for this View
    events: {
        "click div": "changeBeer"
    },

    /** Initialize function, executed when the View is being constructed
     *
     */
    initialize: function ()
    {
        //Set templates to use later on
        this.templateBeers = _.template(this.$('#template-beer').html());

        this.loadBeers();

        //Listen to global events to refresh the beers when users are refreshed
        this.listenTo(Backbone,'getUsers',this.loadBeers);
    },

    /**
     * Wrapper function to load the beers through the collection
     *
     * @param data
     */
    loadBeers: function (data)
    {
        if($('#lock').attr('class') != 'locked'){
            this.collection.fetch({
                success: (collection) => this.loadBeersSuccessHandler(collection)
            });
        }
    },

    /**
     * Success Handler will add HTML of Beers to this $el
     *
     * @param collection
     */
    loadBeersSuccessHandler: function (collection)
    {
        this.$el.html(this.templateBeers({beers: collection.models}));

        $('#selectBeer div:first').addClass('selected');
    },

    /**
     * Handles the clicking of a beer type element, making it the choice of beverage
     *
     * @param e
     */
    changeBeer: function(e){
        var target = e.target;
        if(target.className != 'selected' && $('#lock').attr('class') != 'locked'){
            $('#selectBeer .selected').removeClass('selected');
            target.classList.add('selected');
        }
    }
});

export default BeerView;