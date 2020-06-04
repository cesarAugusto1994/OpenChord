export const languages = ['en_us', 'pt_br'] as const;
export const sentences = [
  'language_name',
  'settings',
  'playlists',
  'online_search',
  'artists',
  'songs',
  'preview',
  'add_songs',
  'edit_song',
  'edit',
  'delete',
  'go_to_online_search',
  'go_to_artist',
  'share',
  'create_new_playlist',
  'you_havent_created_any_playlist_yet',
  'you_havent_downloaded_any_song_yet',
  'search',
  'create',
  'playlist_name',
  'playlist_edit',
  'create_backup',
  'create_backup_description',
  'import',
  'import_description',
  'invalid_title',
  'invalid_artist',
  'invalid_content',
  'song_title',
  'artist_name',
  'chords_over_lyrics',
  'auto_scroll',
  'show_tabs',
  'page_turner',
  'playlists_not_found',
  'close'
] as const;
export type SentenceID = typeof sentences[number];
export type LanguageID = typeof languages[number];
export type Translation = Record<SentenceID, string>
export type Languages = Record<LanguageID, Translation>

const translations: Languages = {
  en_us: {
    language_name: "English",
    settings: 'Settings',
    playlists: 'Playlists',
    artists: 'Artists',
    online_search: 'Online Search',
    songs: 'Songs',
    preview: 'Preview',
    add_songs: 'Add songs',
    edit_song: 'Edit Song',
    edit: 'Edit',
    delete: 'Delete',
    go_to_online_search: 'Go to Online Search',
    go_to_artist: 'Go To Artist',
    share: 'Share',
    create_new_playlist: 'Create New Playlist',
    you_havent_created_any_playlist_yet: "You haven't created any playlist yet",
    you_havent_downloaded_any_song_yet: "You haven't downloaded any song yet",
    search: 'Search',
    create: 'Create',
    playlist_name: 'Playlist name',
    playlist_edit: 'Playlist Edit',
    create_backup: "Create Backup",
    create_backup_description: "Pack all songs and playlists into a .openchord file",
    import: 'Import',
    import_description: 'Backups, Playlists and .openchord files',
    artist_name: 'Artist Name',
    chords_over_lyrics: 'Chords over Lyrics',
    invalid_artist: 'Invalid Artist',
    invalid_content: 'Invalid Content',
    invalid_title: 'Invalid Title',
    song_title: 'Song Title',
    auto_scroll: 'Auto Scroll',
    page_turner: 'Page Turner',
    playlists_not_found: 'Playlists not found',
    show_tabs: 'Show Tabs',
    close: 'Close'
  },
  pt_br: {
    language_name: "Português (Brasil)",
    settings: "Configurações",
    playlists: 'Listas',
    artists: 'Artistas',
    online_search: 'Busca Online',
    songs: 'Músicas',
    preview: 'Preview',
    add_songs: 'Adicionar Músicas',
    edit_song: 'Editar Música',
    edit: 'Editar',
    delete: 'Remover',
    go_to_online_search: 'Ir para Busca Online',
    go_to_artist: 'Ir para Artista',
    share: 'Compartilhar',
    create_new_playlist: 'Criar nova Playlist',
    you_havent_created_any_playlist_yet: 'Você não criou nenhuma playlist ainda',
    you_havent_downloaded_any_song_yet: "Você não baixou nenhuma música ainda",
    search: 'Busca',
    create: 'Criar',
    playlist_name: 'Nome da Playlist',
    playlist_edit: 'Editar Playlist',
    create_backup: 'Criar Backup',
    create_backup_description: 'Empacota todas as músicas e playlists em um arquivo .openchord',
    import: 'Importar',
    import_description: 'Backups, Playlist e arquivos .openchord',
    artist_name: 'Nome do Artista',
    chords_over_lyrics: 'Acordes acima da letra',
    invalid_artist: 'Artista inválido',
    invalid_title: 'Título inválido',
    invalid_content: 'Conteúdo inválido',
    song_title: 'Título da Música',
    auto_scroll: 'Rolagem automática',
    page_turner: 'Passador de páginas',
    playlists_not_found: 'Playlists não encontradas',
    show_tabs: 'Mostrar tablaturas',
    close: 'Fechar'
  }
}
export default translations