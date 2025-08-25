player.onChat("\"Cubo\"", function () {
    agent.teleportToPlayer()
    agent.move(FORWARD, 3)
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.setAssist(DESTROY_OBSTACLES, true)
    agent.setItem(TNT, 1, 1)
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 5)
            agent.turn(RIGHT_TURN)
        }
    }
    agent.move(UP, 1)
})
