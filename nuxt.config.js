export default {
    build: {
        vendor: [
            '@/plugins/canvas'
        ]
    },
    plugins: [
        {
            src: '@/plugins/canvas',
            ssr: false
        }
    ]
}