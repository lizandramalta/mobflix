import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import header from "../../assets/Header.png"
  import banner from "../../assets/Banner.png";
  import MyText from "../components/MyText";
  import MenuButton from "../components/MenuButton";
  
  type Category = {
    name: string;
    color: string;
  };
  
  const categories: Category[] = [
    {
      name: "Front End",
      color: "#5781EF",
    },
    {
      name: "Programação",
      color: "#19940F",
    },
    {
      name: "Mobile",
      color: "#D82D2D",
    },
    {
      name: "Data Science",
      color: "#F5BD00",
    },
    {
      name: "Devops",
      color: "#C147B5",
    },
    {
      name: "UX e Design",
      color: "#9ADCD9",
    },
  ];
  
  export default function Home() {
   
    return (
      <View style={styles.container}>
        <View>
          <Image source={header} />
        </View>
        <View style={styles.banner}>
          <Image source={banner} />
          <TouchableOpacity style={styles.highlightButton}>
            <MyText textWeight="regular" style={styles.highlightButtonText}>
              Assista agora
            </MyText>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}
        >
          {categories.map(category => (<MenuButton text={category.name} color={category.color} key={category.name}/>))}
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#222222",
      alignItems: "center",
    },
    banner: {
      position: "relative",
      alignItems: "center",
    },
    highlightButton: {
      borderRadius: 8,
      backgroundColor: "#2478DF",
      paddingHorizontal: 9,
      width: 128,
      height: 43,
      justifyContent: "center",
      position: "absolute",
      top: 74.5,
    },
    highlightButtonText: {
      fontSize: 18,
      textAlign: "center",
      lineHeight: 21,
    },
    categories: {
      marginTop: 28,
      paddingHorizontal: 26,
    }
  });
  