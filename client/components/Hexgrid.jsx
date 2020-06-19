import React from 'react'
import { HexGrid, Layout, Hexagon, GridGenerator } from 'react-hexgrid';

class Hexgrid extends React.Component {

  render() {
    const hexagons = GridGenerator.parallelogram(-25, 25, -25, 25)

    return (
      <div className="hexgrid wrapper">
        <HexGrid width={window.innerWidth} height={window.innerHeight}>
          <Layout size={{ x: 4, y: 4 }} flat={true} spacing={1.05}>
            { hexagons.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default Hexgrid