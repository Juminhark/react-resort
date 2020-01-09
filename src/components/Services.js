import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
  state={
    services: [
      {
        icon:<FaCocktail/>,
        title:"free cocktails",
        info: "anksdvs ams lkdfmskldf sdklmsd klfms faa!"
      },
      {
        icon:<FaHiking/>,
        title:"Endless Hiking",
        info: "anksdvs ams lkdfmskldf sdklmsd klfms faa!"
      },
      {
        icon:<FaShuttleVan/>,
        title:"Free shuttle",
        info: "anksdvs ams lkdfmskldf sdklmsd klfms faa!"
      },
      {
        icon:<FaBeer/>,
        title:"Strongest Beer",
        info: "anksdvs ams lkdfmskldf sdklmsd klfms faa!"
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item,index) => {
            return <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })}
        </div>
        
      </section>
    )
  }
}
