import React from 'react'
import { HexGrid, Layout, Hexagon, GridGenerator } from 'react-hexgrid';

class Hexgrid extends React.Component {

  render() {
    const hexagons = GridGenerator.parallelogram(-15, 15, -15, 15)

    return (
      <div className="hexgrid">
        <HexGrid width={window.innerWidth} height={window.innerHeight}>
          <Layout size={{ x: 5, y: 5 }}>
            { hexagons.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default Hexgrid