 
export const simpleConfig = {
    nodeHighlightBehavior: true,
    directed: true,    
    node: {
        color: 'lightgreen',
        size: 600,
        fontSize: 15,
        highlightStrokeColor: 'blue'
    },
    target:{
        color: 'lightblue',
        size: 600,
        highlightStrokeColor: 'blue'
    },
    link: {
        highlightColor: 'lightblue'
    }
};

export const complexConfig = {
  "automaticRearrangeAfterDropNode": true,
  "collapsible": true,
  "directed": true,
  "focusAnimationDuration": 0.75,
  "focusZoom": 1,
  "height": 800,
  "highlightDegree": 2,
  "highlightOpacity": 0.2,
  "linkHighlightBehavior": true,
  "maxZoom": 12,
  "minZoom": 0.05,
  "nodeHighlightBehavior": true,
  "panAndZoom": false,
  "staticGraph": false,
  "width": 1200,
  "d3": {
    "alphaTarget": 0.05,
    "gravity": -250,
    "linkLength": 120,
    "linkStrength": 2
  },
  "node": {
    "color": "lightgreen",
    "size": 600,
    "fontSize": 15,
    "highlightStrokeColor": "blue",
    "highlightFontSize": 14,
    "highlightFontWeight": "bold",
    "highlightStrokeWidth": 1.5,
    "mouseCursor": "crosshair",
    "opacity": 0.9,
    "renderLabel": true,
    "strokeColor": "none",
    "strokeWidth": 1.5,
    "svg": "",
    "symbolType": "circle"
  },
  "link": {
    "color": "lightblue",
    "fontColor": "black",
    "fontSize": 8,
    "fontWeight": "normal",
    "highlightColor": "green",
    "highlightFontSize": 8,
    "highlightFontWeight": "normal",
    "labelProperty": "label",
    "mouseCursor": "pointer",
    "opacity": 1,
    "renderLabel": false,
    "semanticStrokeWidth": true,
    "strokeWidth": 3
  }
}
