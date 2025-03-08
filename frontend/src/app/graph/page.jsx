'use client'
import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network/standalone/esm/vis-network";
import axios from "axios";
import { useMainStoriesContext } from "@/context/MainStoriesContext";

const GraphVisualization = () => {
  const containerRef = useRef(null);
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });
  const { mainStories } = useMainStoriesContext();

  const getTitleById = (id) => {
    const story = mainStories.find((story) => story.id === id);
    return story.value.title;
  };

  const getDescriptionById = (id) => {
    const story = mainStories.find((story) => story.id === id);
    return story.value.description;
  };

  useEffect(() => {
    const fetchGraph = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/relations");
        const graph = response.data.graph;

        const nodes = Object.keys(graph).map((id) => ({
          id,
          label: getTitleById(id),
          title: getDescriptionById(id), // Tooltip
        }));

        const edges = [];
        Object.entries(graph).forEach(([node, connections]) => {
          connections.forEach((target) => {
            if (!edges.some((e) => (e.from === target && e.to === node))) {
              edges.push({ from: node, to: target });
            }
          });
        });

        setGraphData({ nodes, edges });
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchGraph();
  }, [mainStories]);

  useEffect(() => {
    if (containerRef.current && graphData.nodes.length > 0) {
      new Network(containerRef.current, graphData, {
        nodes: { shape: "dot", size: 20 },
        edges: { arrows: "to" },
        physics: { enabled: true },
      });
    }
  }, [graphData]);

  return <div ref={containerRef} style={{ width: "100%", height: "500px", border: "1px solid black" }} />;
};

export default GraphVisualization;
