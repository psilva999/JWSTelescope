import React from 'react'
import Build from '../../assets/imgs/7-historia/4.jpg'

const Building = () => {
  return (
    <article className='text-history' id='build'> <h1>Planejamento e construção</h1>
      <p>
        Engenheiros e astrônomos inovaram novas maneiras de atender às demandas científicas do telescópio Webb, bem como uma missão a uma distância inservível da Terra. Ao contrário do Hubble, os astronautas não poderão reparar e atualizar o telescópio.
      </p>

      <p>
        <a className='background-detail-history n-b-3'>A construção do Webb começou em 2004</a>. Em 2005, o porto espacial Center Spatial Guyanais (CSG) da Agência Espacial Européia na Guiana Francesa foi escolhido como local de lançamento e um foguete Ariane 5 como veículo de lançamento. 
      </p>

      <p>
        Em 2011, todos os 18 segmentos de espelhos foram finalizados e comprovados por meio de testes para atender às especificações exigidas.
      </p>

      <img src={ Build }/>

      <p>
        Entre 2012 e 2013, as peças individuais de Webb, construídas em vários locais, começaram a chegar ao Goddard Space Flight Center da NASA em Greenbelt, Maryland.
      </p>

      <p>
        Em 2013, começou a construção das camadas de proteção solar. De 2013 a 2016, os instrumentos científicos da Webb foram submetidos a inúmeros testes de temperatura e vibração extremas.
      </p>

      <p>
        Do final de 2015 ao início de 2016, todos os 18 espelhos individuais do Webb foram instalados na estrutura do backplane do telescópio para montar o espelho de 6,6 metros (21,7 pés).
      </p>
    </article>
  )
}

export default Building
