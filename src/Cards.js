import React from "react"
import { Button, Table, } from "semantic-ui-react";
const Cards = (props) => (
  <table>
      <table.header>
        <table.row>
          <table.headerCell>Card</table.headerCell>
          <table.headerCell></table.headerCell>
        </table.row>
      </table.header>

      <table.Body>
        {
          Cards.map(
            
          )
        }
      </table.Body>
  </table>
)

export default Cards