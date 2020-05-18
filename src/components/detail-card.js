import React from "react";
import "../card.css";
import "../main.css";
import { Radar  } from 'react-chartjs-2'
import {Chart} from 'chart.js'

export default props => {
  let imageUrl = `https://api.opendota.com${props.hero.img}`;
//   let ctx = document.getElementById('myId');
    console.log(props.hero.base_str,'ini base STR')
    const data = {
        labels: ['Base Agilty', 'Base Strength',  'Base Inteligence'],
        datasets: [
          {
            label: `${props.hero.localized_name} Base Stat`,
            backgroundColor: 'rgba(35, 193, 255,0.3)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [props.hero.base_agi, props.hero.base_str, props.hero.base_int]
          },
        ]
      };
  return (
    <div className="fave-contain">
<div className={props.uyu ==='uyu' ? 'uyu' : 'kiri'}>
        <div className="columnz">
          <span className="heroes-name"> {props.hero.localized_name} </span>
          <img src={imageUrl}></img>
        </div>
        <div className="columnzz">
            <div style={{overflowY:'scroll',height:'150px'}}>

          <table>
              <thead>
                  <tr>
                      <td> </td>
                      <td> </td>
                  </tr>
              </thead>
              <tbody>
            <tr>
              <td> Primary Stats: </td>
              <td>
                {props.hero.primary_attr === "str"
                  ? "Strength"
                  : props.hero.primary_attr === "int"
                  ? "Inteligence"
                  : props.hero.primary_attr === "agi"
                  ? "Agility"
                  : ""}
              </td>
            </tr>
            <tr>
              <td> Attack Type: </td>
              <td> {props.hero.attack_type}</td>
            </tr>
            <tr>
              <td> Roles :</td>
              <td> {props.hero.roles.join(", ")} </td>
            </tr>
            <tr>
              <td>Health: </td>
              <td> {props.hero.base_health}</td>
            </tr>
            <tr>
              <td>Health Regen: </td>
              <td> {props.hero.base_health_regen}</td>
            </tr>
            <tr>
              <td>Mana: </td>
              <td> {props.hero.base_mana}</td>
            </tr>
            <tr>
              <td>Mana Regen: </td>
              <td> {props.hero.base_mana_regen}</td>
            </tr>
            <tr>
              <td> Base Armor: </td>
              <td> {props.hero.base_armor}</td>
            </tr>
            <tr>
            <td>Move Speed</td>
                <td> {props.hero.move_speed}</td>
                </tr>
            </tbody>
          </table>
            </div>
        </div>
        <div>
            <Radar data={data}  width={300}
            height={300}
            options={{ maintainAspectRatio: false }}
            />

        </div>
        
        {/* <div>
          <table>
            <tr>
              <td>Health: </td>
              <td> {props.hero.base_health}</td>
            </tr>
            <tr>
              <td>Health Regen: </td>
              <td> {props.hero.base_health_regen}</td>
            </tr>
            <tr>
              <td>Mana: </td>
              <td> {props.hero.base_mana}</td>
            </tr>
            <tr>
              <td>Mana Regen: </td>
              <td> {props.hero.base_mana_regen}</td>
            </tr>
            <tr>
              <td>Armor: </td>
              <td> {props.hero.base_armor}</td>
            </tr>
            <tr>
              <td>Agility: </td>
              <td> {props.hero.base_agi}</td>
            </tr>
            <tr>
              <td>Strength: </td>
              <td> {props.hero.base_str}</td>
            </tr>
            <tr>
              <td>Inteligence: </td>
              <td> {props.hero.base_int}</td>
            </tr>
          </table>
        </div>
        <div>
            <table>
                <tr>
                <td>Agility Growth</td>
                <td> {props.hero.agi_gain}</td>
                </tr>
                <tr>
                <td>Strength Growth</td>
                <td> {props.hero.str_gain}</td>
                </tr>
                <tr>
                <td>Inteligence Growth</td>
                <td> {props.hero.int_gain}</td>
                </tr>
                <tr>
                <td>Move Speed</td>
                <td> {props.hero.move_speed}</td>
                </tr>
            </table>
        </div> */}
      </div>
    </div>
  );
};
