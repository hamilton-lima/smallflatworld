# work in progress

## Main goals
- Custom images on scenario (OK)
- Play sound effects (OK)
- Create scenario using code (OK)
- Code together

## Next steps 
- explore https://www.smashingmagazine.com/2021/10/real-time-multi-user-game/

- Keep state of the realm in the server
- Add operation to do the first sync, and ready callback from client
- Keep update requests in a memory queue.
    - https://www.npmjs.com/package/double-ended-queue, faster than array
- Track oldest update time from clients and keep in the queue only after that
- Send chunk of updates to clients 

- All state updates should be in sequence, catchup with the updates after the first sync.
    - Send player position updates and user name
    - Show other user character name above the character
    - Fix mesh template when receiving udpates
    - Asset creation should be imediated stored in the persisted state
    - All state updates, code, images, etc etc, 
    should be numbered in sequence to allow catching up and sending only the changes to a specific connected node
    
    - Every X updates keep snapshot of the persisted state

- Open realm from url /join/<server-host:port>/<realm-uuid>

- add clone realm 
- add default template realm.
- create logic blocks with prefill numbers
- add to libraries https://kaylousberg.itch.io/kay-kit-mini-game-variety-pack
- shadow to all or just the character
- add instructions using https://shepherdjs.dev/ defined by code
    - add action to show sheperdjs bubble, define target on the screen or position
    - onstart script 
    - trigger event, next slide e.g.
    - on event do something
    - read and save user info to track if the tutorial was already loaded
    - settings to see all user info saved in the browser
    - set realm as template, add to realm options
    - track log of events

- website documentation
- first lessons, what are the topics?

### play together

- Auto generate user name
- Allow to update names
- Allow to update character mesh - contain the model in a specific size and keep the bounding box the same. a cylinder
- app physics to the moveable elements, shouldn't all be moveable? tbd weigth

- Explore options on servers
    - https://www.colyseus.io/
    - https://heroiclabs.com/nakama-opensource/
    - https://agones.dev/site/

