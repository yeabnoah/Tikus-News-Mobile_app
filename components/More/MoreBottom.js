import { View, Text, StyleSheet, Dimensions, Touchable } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ip from "../../utils/Ip";

const { height, width } = Dimensions.get("window");

export default function MoreBottom() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`http:${Ip}:4000/feed/`);
  //   };
  // }, []);

  return (
    <View style={styles.body}>
      <View style={styles.news}>
        <View style={styles.newsWrap}>
          <View style={styles.flex}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.text}>ከ 1 ደቂቃ በፊት</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <Text style={styles.text}># Politics</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bar}></View>
          <Text style={styles.text}>
            " በብዛት የምንቀጥረው የእኛ ልጆች የሥራ ዕድል እንዲያገኙ ከዩኒቨርስቲ የሚመጡ ግራጁየቶችን ነው " -
            የአንድ ባንክ ባለስልጣን " ጉዳዩ የሚታወቅ ነው እኮ " - የኢትዮጵያ  ሕዝብ ዕንባ ጠባቂ ተቋም የሥራ
            ቅጥርን በተመለከተ በተለያዩ ተቋማት የሚደረግ ብሔር ተኮር፣ የዘመድ አዝማድና የሙስና ቅጦር ለምሬት
            እንደዳረጋቸው በርካቶች በተደጋጋሚ እሮሮ ሲያሰሙ ይደመጣሉ። በተለይ #በባንክ_ቤቶች ይሄው ችግር በሰፊው
            እንደሚስተዋል መነገር ከጀመረም ሰንበትበት ያለ ቢሆንም ችግሩ መፍትሄ ስላልተቸረው አሁንም እንደቀጠለ ቲክቫህ
            ኢትዮጵያ መረዳት ችሏል። የአንድ ባንክ ባለሥጣን ባንኩ በዚህ ዓመት አዘጋጅቶት በነበረው የባለአክሲዮኖች
            ስብስባ የሠራተኛን የቅጥር ሁኔታን በተመለከተ በመርሀ ግብሩ ወቅት ከአንድ ባለአክሲዮን ለቀረበላቸው ጥያቄ
            ባደረጉት ገለጻ፣ " በብዛት የምንቀጥረው የእኛ ልጆች የሥራ ዕድል እንዲያገኙ ከዩኒቨርስቲ የሚመጡ
            ግራጁየቶችን ነው " ሲሉ ተደምጠዋል። ባለስልጣኑ እንዲህ ያሉት በባንኩ ሠራተኞች አገልግሎት አሰጣጥ ክፍተትን
            በተመለከተ ከአንድ የባንኩ ባለአክሲዮን የቀረበላቸውን ጥያቄን በተመለከተ ማብራሪያ በሰጡበት አውድ ነው።
            ቲክቫህ ኢትዮጵያ ፦ * በብሔር ተኮር ፣ * በሙስና የቅጥር አፈጻጸሞች ዙሪያ ከዜጎች የደረሱት ቅሬታዎች
            እንዳሉ፣ እንደ ተቋምም በዚሁ ረገድ የሕዝብን እንባ ለማበስ ጉዳዩን አይቶት (ተከታትሎት) እንደሆነ፣
            የኢትዮጵያ  ሕዝብ ዕንባ ጠባቂ ተቋምን ጠይቋል። አንድ የተቋሙ ከፍተኛ ባለሥልጣን በሰጡን ቃል፣ " ጉዳዩ
            የሚታይ እኮ አይደለም፣ የሚታወቅ ስለሆነ " ብለዋል። ከዚህ በፊትም ከሥራ ቅጥር ጋር በተያያዘ በርካታ
            አቤቱታዎች ወደ ተቋሙ ይመጡ እንደነበር አስታውሰዋል። " አቤቱታ በተናጠል ሊመጣ ይችላል " ያሉት የተቋሙ
            ባለስልጣን " ነገር ግን ማስረጃ ስለማይኖር፣ እከሌ በዘመድ ነው የተቀጠረው፣ ገንዘብ ሰጥቶ ነው የተቀጠረው
            የሚለውን ነገር ኢቪደንስ ስለማይኖር ሰውም አይመጣም " ብለዋል። " ግን አጠቅላይ ስሩአውት ዘከንትሪ ያለው
            ትሬንድ ወይ ዘመድ ካለህ፣ ወይ ገንዘብ ካለህ ነው የምትቀጠረው በማስረጃ እንዲህ ነው ለማለት ግን ያስቸግራል
            " ነው ያሉት ባለሥልጣኑ። የመፍትሄ አቅጣጫው ምን እንደሆነ ሲጠየቁም፣ " ሲቪል ሰርቪስ ወቅታዊ ሁኔታዎች
            ይዘውት እንጂ አጠቃላይ በዚህ የአገልግሎት አሰጣጡ ላይ ተከታታይ የሆነ ሥራ እንደሚሰራ፣ እኛም ጠይቀናቸዋል
            " ብለዋል። አክለውም፣ " ከዚህ ከአገልግሎቱ አሰጣጥ ጋር፣ ከመልካም አስተዳደር ጉዳይ፣ ከቅጥርም፣
            ከእያንዳንዱ የሰው ኃይል ጋር ተያይዞ በቅጡ እየሄደ አይደለም የሚል ሀሳብ አንስተንላቸው እነርሱም ዝግጅት
            አጠናቀው 'በስድስት ወራት የምንሰራው ሥራ ነው' የሚል ሀሳብ አንስተዋል " ሲሉ አስረድተዋል። ዘገባውን
            ያጠናቀረው የአ/አ ቲክቫህ ኢትዮጵያ ቤተሰብ አባል ነው። @tikvahethiopia
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 3,
    borderRadius: 10,
    backgroundColor: "#CFD2DA",
  },
  btn: {
    backgroundColor: "#CFD2DA",
    padding: 10,
    borderRadius: 20,
  },
  newsWrap: {
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: -30,
    marginBottom: 10,
  },
  bar: {
    borderBottomColor: "#000",
    borderBottomWidth: 1.5,
    borderStyle: "dashed",
    marginVertical: 10,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    paddingTop: 2,
  },
  text: {
    fontSize: height * 0.023,
    textAlign: "left",
    paddingHorizontal: 3,
  },
  news: {
    justifyContent: "center",
  },
});
