const user = {
    _id: '1',
    name: 'alaa',
    email: 'alaa.alden.010@gmail.com',
    picture: 'https://cloudinary.com/asdf'
}
module.exports = {
    Query: {
        me:()=>user

    }
}