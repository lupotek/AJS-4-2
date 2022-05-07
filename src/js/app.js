export default function healthView (obj) {
const healthSort = obj.sort((a,b) => b.health - a.health)
return healthSort
}