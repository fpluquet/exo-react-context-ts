// todo 1 :
// question : comment peut-on vérifier que ce composant n'est pas rafraîchit quand l'état du login change ?

export default function WithoutConnection() {
    console.log('WithoutConnection')
    return (
        <div>
            <em>Ce composant ne sera pas rafraîchit quand l'état du login change</em>
        </div>
    )
}
