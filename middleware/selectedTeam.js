export default function ({ store, redirect }) {
    // If hasn't a selected team
    if (store.state.selectedTeam.length === 0) {
        return redirect('/')
    }
}