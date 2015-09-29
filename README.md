# hiveoss-animated-layout
A polymer 1.0 component which abstracts the neon-animation hero transition between 2 views. The component takes any child elements and separate them into 2 views based on their classes. There is a initial load view that can comprise of any number of elements and a page view that will display a detailed view of the selected view.

An abstraction of the neon-animated-pages with hero transitions. 

This element layout sub-components into 2 views
 - an opening view, `hiveoss-animated-grid.html`, 
 - a drill-in view, `hiveoss-animated-page.html`.
 
Only one of the view will be visible at any one time. This is controlled by 
the property `selectedMode` 
  - `0` for the opening view, 
  - `1` for the drill-in view.

The opening view can be used as the initial page of the app, where
elements can be layout and then triggered to transit into the 
drill-in view with the corresponding paired drill-in element. 

The element to render in the drill-in view is controlled by the `selectedPage`
property. This property is closely related to `triggerEleSelector` and 
`attrForSelected`, and must be a from of the set of variables defined in 
the `attrForSelected` attributes.

Example:

```
<hiveoss-animated-layout
  attr-for-selected="data-page"
  trigger-ele-selector=".hiveoss-trigger"
  selected="{{view}}"
  selected-page="{{page}}"
  selected-item="{{selectedItem}}">

  <paper-card heading="Card Title" class="hiveoss-tile" data-page="page1">
    <div class="card-content">Some content</div>
    <div class="card-actions">
      <paper-button class="hiveoss-trigger">Some action</paper-button>
    </div>
  </paper-card>

  <h1 class="hiveoss-title">Some Title</h1>
  <div class="hiveoss-page" data-page="page1">Some content</div>

</hiveoss-animated-layout>

```


### Data Attributes
Data attributes are used to communicate the element state between the 2 views.

Attribute | Element | Description
----------------|-------------|-------------
`data-hiveoss-page` | Opening-view and Drill-in view elements | used to pair the 2 elements for transition
`data-page-color` | Opening-view elements (optional) | define the color of the Drill-in foreground element (default: transparent)
`data-bg-color` | Opening-view elements  (optional) | define the color of the Drill-in background element (default: same as opening view element)

### Content Elements
In order to identify the type of elements (opening view, or drill-in view),
all top-level content elements must have one of the following classes.

The classes `hiveoss-tile` and `hiveoss-page` are used to differentiate
between opening view elements and drill-in view elements.

The class `hiveoss-page-fixed` is used to identify static elements in the
drill-in view. These elements will always be rendered as long as the drill-in
view is active.

Element Classname | View | Description
----------------|-------------|----------
`hiveoss-tile` | Opening view | persistent element in the drill-in view
`hiveoss-page` | Drill-in view | selectable element in the drill-in view
`hiveoss-page-fixed` | Drill-in view | persistent element in the drill-in view

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--hiveoss-animated-page` | Mixin applied to the drill-in view card | `{}`
`--hiveoss-animated-page-background` | Mixin applied to the drill-in view background | `{}`

## Install
```
bower install hiveoss-animated-layout
```

More details on the usage can be found at the [component page](http://hiveoss.github.io/hiveoss-animated-layout/).

