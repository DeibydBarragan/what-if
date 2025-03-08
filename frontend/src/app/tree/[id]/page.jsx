"use client";
import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network/standalone/esm/vis-network";
import { DataSet } from "vis-data/standalone/esm/vis-data";
import axios from "axios";
import { useParams } from "next/navigation";

const TreeVisualization = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const [treeData, setTreeData] = useState({ nodes: [], edges: [] });

  useEffect(() => {
    console.log("Fetching tree for id:", id);
    
    const fetchTree = async () => {
      if (!id) return; // Asegurar que id es válido

      try {
        const response = await axios.get(`http://localhost:3001/api/story?dir=${id}`);
        console.log("API Response:", response.data);
        const tree = response.data;
        
        const nodes = [];
        const edges = [];
        
        const processNode = (node, parentId = null, nodeId = "root") => {
          if (!node || !node.value) return;

          const id = nodeId;
          const label = node.value.title || node.value.content || "No Title";

          nodes.push({ id, label });

          if (parentId !== null) {
            edges.push({ from: parentId, to: id });
          }

          if (Array.isArray(node.children)) {
            node.children.forEach((child, index) => {
              processNode(child, id, `${id}-${index}`);
            });
          }
        };

        // Procesar el árbol
        processNode(tree, null, "root");

        setTreeData({ nodes, edges });
      } catch (error) {
        console.error("Error fetching tree data:", error);
      }
    };

    fetchTree();
  }, [id]);

  useEffect(() => {
    console.log("Tree Data:", treeData);
    if (containerRef.current && treeData.nodes.length > 0) {
      console.log("Rendering graph with nodes:", treeData.nodes);
      new Network(containerRef.current, {
        nodes: new DataSet(treeData.nodes),
        edges: new DataSet(treeData.edges),
      }, {
        layout: { hierarchical: { enabled: true, direction: "UD" } },
        nodes: { shape: "box" },
        edges: { arrows: "to" },
      });
    }
  }, [treeData]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "500px", border: "1px solid black" }} />
  );
};

export default TreeVisualization;
