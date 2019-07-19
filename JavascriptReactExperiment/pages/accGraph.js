import React from 'react';
import Layout from '../components/layout.js';
import { Graph } from 'react-d3-graph';
import { data } from "../data/AccGraphData";
import { complexConfig } from "../components/graphconfig.js";
import { simpleConfig } from "../components/graphconfig.js";
 
 
// graph event callbacks
const onClickGraph = function() {
   // window.alert(`Clicked the graph background`);
};
 
const onClickNode = function(nodeId) {
   // window.alert(`Clicked node ${nodeId}`);
};
 
const onRightClickNode = function(event, nodeId) {
   // window.alert(`Right clicked node ${nodeId}`);
};
 
const onMouseOverNode = function(nodeId) {
   // window.alert(`Mouse over node ${nodeId}`);
};
 
const onMouseOutNode = function(nodeId) {
   // window.alert(`Mouse out node ${nodeId}`);
};
 
const onClickLink = function(source, target) {
    //window.alert(`Clicked link between ${source} and ${target}`);
};
 
const onRightClickLink = function(event, source, target) {
   //window.alert(`Right clicked link between ${source} and ${target}`);
};
 
const onMouseOverLink = function(source, target) {
   // window.alert(`Mouse over in link between ${source} and ${target}`);
};
 
const onMouseOutLink = function(source, target) {
    //window.alert(`Mouse out link between ${source} and ${target}`);
};
 
export default function AccGraph() {
  return (
    <div>
    <Layout>
    <h2>Attribute Component Capability Matrix</h2>
   
    <Graph
        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={complexConfig}
        onClickNode={onClickNode}
        onRightClickNode={onRightClickNode}
        onClickGraph={onClickGraph}
        onClickLink={onClickLink}
        onRightClickLink={onRightClickLink}
        onMouseOverNode={onMouseOverNode}
        onMouseOutNode={onMouseOutNode}
        onMouseOverLink={onMouseOverLink}
        onMouseOutLink={onMouseOutLink}
    />;
    
    </Layout>
  
    </div>
  );
}
