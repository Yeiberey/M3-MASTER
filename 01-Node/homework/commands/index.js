

module.exports = {
    date: ()=>process.stdout.write(Date()),
    pwd: ()=>process.stdout.write(process.cwd())
}