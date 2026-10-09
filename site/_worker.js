export default {
  fetch() {
    return new Response('server-side code from an untrusted PR')
  },
}
