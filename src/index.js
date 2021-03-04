import React from 'react';
import ReactDOM from 'react-dom';

// Componente Dia
function Day(props) {
    return (
        <button>
            { 
                (props.date > 0 && props.date < 32 ) ? // pergunta 
                    props.date : // se sim
                    "_" // se nao
            }
        </button>
    );
}

// Componente Semana
function Week(props) {
    return (
        <div>
            <Day date={props.startDate}     weekday={"Dom"} />
            <Day date={props.startDate + 1} weekday={"Seg"} />
            <Day date={props.startDate + 2} weekday={"Ter"} />
            <Day date={props.startDate + 3} weekday={"Qua"} />
            <Day date={props.startDate + 4} weekday={"Qui"} />
            <Day date={props.startDate + 5} weekday={"Sex"} />
            <Day date={props.startDate + 6} weekday={"Sab"} />
        </div> 
    )
}

// Componente Calendario
function Calendar(props) {
    return (
        <div>
            <div>
                {props.mes}/{props.ano}   
            </div>   
            <Week startDate={0}/>
            <Week startDate={7}/>
            <Week startDate={14}/>
            <Week startDate={21}/>
            <Week startDate={28}/> 
        </div>
    ) 
}

// Componente Agenda
function Scheduler() {
    return (
        <div>
            <div>
                <Calendar mes={"03"} ano={"2021"} />
            </div>
            <div>
                Eventos
            </div>
        </div>
    )
}

ReactDOM.render(
    // Renderizar..
    // Componente
    <Scheduler/>,
    // Em qual elemento
    document.getElementById('root')
);