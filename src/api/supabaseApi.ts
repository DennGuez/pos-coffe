import axios from 'axios'

const supabaseApi = axios.create({
      baseURL: 'https://uvqhvrlopipsxhmalkmp.supabase.co/rest/v1',
      headers: {
            apikey: process.env.SUPABASE_APIKEY,
            Authorization: process.env.SUPABASE_AUTH
      }
})

export default supabaseApi