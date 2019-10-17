import React, { useState, useEffect, FunctionComponent } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { NavigationScreenComponent } from "react-navigation";
import { NavigationStackOptions, NavigationStackProp } from "react-navigation-stack/lib/typescript/types";
import SongRender from "../components/SongRender";
import SongTransformer from "../components/SongTransformer";
import { getService } from "../services";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ChordSheetJS from 'chordsheetjs';
import realm, { Artist, Song } from "../db";

interface SongPreviewProps {
  navigation: NavigationStackProp<{}, { path: string, serviceName: string }>
}
const SongPreview: FunctionComponent<SongPreviewProps> & NavigationScreenComponent<
  NavigationStackOptions,
  NavigationStackProp
> = (props) => {
  const [chordSheet, setChordCheet] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  let serviceName = props.navigation.getParam('serviceName')
  let path = props.navigation.getParam('path')

  useEffect(() => {
    const fetchData = async () => {
      let service = getService(serviceName)!
      let chordPro = await service.getChordProSong(path)
      setChordCheet(chordPro)
    };
    fetchData();
  }, []);

  function saveSong() {
    if (isSaving) return
    setIsSaving(true)
    const parser = new ChordSheetJS.ChordProParser();
    const formatter = new ChordSheetJS.ChordProFormatter();
    const parsedSong = parser.parse(chordSheet!);

    let artist = new Artist(parsedSong.getMetaData('artist')!)
    let song = new Song(parsedSong.getMetaData('title')!, formatter.format(parsedSong), artist)
    let songId
    realm.write(() => {
      let created = Song.create(song)
      songId = created.id
    })
    props.navigation.navigate('SongView', { id: songId, title: song.title })
    Alert.alert('Song saved')
  }

  return (
    <View style={{ flex: 1 }}>
      {chordSheet == null ? <Text>Loading...</Text> :

        <SongTransformer
          transposeDelta={0}
          chordProSong={chordSheet}
        >
          {({ chords, htmlSong }) => (
            <View style={{ flex: 1 }}>
              <SongRender
                chordProContent={htmlSong}
              />
              <TouchableOpacity
                style={styles.fabButton}
                onPress={saveSong}>
                <Icon
                  color="white"
                  size={30}
                  name="content-save"
                />
              </TouchableOpacity>
            </View>
          )}
        </SongTransformer>
      }

    </View>
  );
}
export default SongPreview

const styles = StyleSheet.create({
  fabButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 100,
    backgroundColor: 'tomato',
    padding: 15
  },
  item: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: 'white',
    justifyContent: 'flex-start'
  },
  itemTitle: {
    fontSize: 18
  }
});