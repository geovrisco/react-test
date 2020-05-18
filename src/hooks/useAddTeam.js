import {useState} from 'react';
export default (data)=>{
    // console.log(data)
    const [teamList, setTeamList] = useState([])
    
    return{
        functAddTeam : (data) => { 
            let countData=[]
            teamList.forEach(hero =>{
                if(hero.id===data.id){
                    countData.push(hero)
                }
            })
            if(countData.length>0){
                alert('cannot add same hero')
            }else{
                if(teamList.length>4){
                alert('Max Hero in your Team is 5')
                }else{
                    setTeamList(teamList.concat(data))
                    console.log(teamList,'ini loh')
                }
            }
        },

        functRemoveTeam : (data) => {
            setTeamList(
                teamList.filter(hero => {
                    console.log(teamList, 'ini deleted')
                    return hero.id !== data.id
                })
            )
        },

        teamList
    }        
}