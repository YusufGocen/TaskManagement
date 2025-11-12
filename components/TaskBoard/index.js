import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect ,useState} from 'react'
import TaskColumn from './TaskColumn'
import { useRoute } from '@react-navigation/native'

const Data=[
    {
        id:"1",
        title:"Backlog",
        data :[
            {id:"B1",title:"Implement Clean Architecture in Flutter Application", date:"22.09.2025" ,
            desc:"Refactor the existing application to adopt a layered architecture model.This should include defining and isolating distinct layers such as Presentation, Business Logic, and Data Access."
        },
        {id:"B2",title:"Implement Clean Architecture in Flutter Application", date:"22.09.2025" ,
            desc:"Refactor the existing application to adopt a layered architecture model.This should include defining and isolating distinct layers such as Presentation, Business Logic, and Data Access."
        },
        {id:"B3",title:"Implement Clean Architecture in Flutter Application", date:"22.09.2025" ,
            desc:"Refactor the existing application to adopt a layered architecture model.This should include defining and isolating distinct layers such as Presentation, Business Logic, and Data Access."
        },        
    ]
    },
    {
        id:"2",
        title:"To Do",
        data :[
            {id:"T1",date:"23.09.2025" , title:"Implement Layered Application Architecture",desc:"Refactor the existing application to adopt a layered architecture model.This should include defining and isolating distinct layers such as Presentation, Business Logic, and Data Access."},
            {id:"T2",date:"23.09.2025" ,title:"Implement Layered Application Architecture",desc:"Refactor the existing application to adopt a layered architecture model.This should include defining and isolating distinct layers such as Presentation, Business Logic, and Data Access."},
            {id:"T3",date:"23.09.2025" ,title:"Implement Layered Application Architecture",desc:"Refactor the existing application to adopt a layered architecture model.This should include defining and isolating distinct layers such as Presentation, Business Logic, and Data Access."},
        ]
    },
    {
        id:"3",
        title:"In Progress",
        data :[
            {id:"P1",date:"24.09.2025" , title:"Implement BLoC Pattern in Flutter App",desc:"Integrate the Business Logic Component (BLoC) pattern into our Flutter application."},
            {id:"P2", date:"24.09.2025" ,title:"Implement BLoC Pattern in Flutter App",desc:"Integrate the Business Logic Component (BLoC) pattern into our Flutter application."},
        ]
    },

]
const index = ({newTask}) => {
    const route = useRoute();
    const [tasks, setTasks] = useState(Data);

    useEffect(() => {
      if (newTask) {
        setTasks((prev) =>
          prev.map((col) =>
            col.title === newTask.status
              ? { ...col, data: [...col.data, newTask] }
              : col
          )
        );
      }
    }, [newTask]);

  return (
    <View style={styles.container}>
      <FlatList data={tasks} keyExtractor={(item)=>item.id.toString()} renderItem={({ item }) => <TaskColumn data={item} />} showsVerticalScrollIndicator={false}>    
      </FlatList>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        marginTop:16,
        flex:1
    }
})