# javascript-sciences
empty

Build a `StateFlow` or `Flow` stream using Jetpack Compose[^1].

```kotlin
fun CoroutineScope.launchCounter(): StateFlow<Int> = launchMolecule {
  var count by remember { mutableStateOf(0) }

  LaunchedEffect(Unit) {
    while (true) {
      delay(1_000)
      count++
    }
  }

  count
}
```
