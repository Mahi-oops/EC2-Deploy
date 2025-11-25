package com.example.snake;

import org.junit.jupiter.api.Test;
import java.awt.Point;
import static org.junit.jupiter.api.Assertions.*;

public class GameEngineTest {

    @Test
    void testInitialSnakeSize() {
        GameEngine engine = new GameEngine(20, 20);
        assertEquals(3, engine.getSnake().size());
    }

    @Test
    void testSnakeMoves() {
        GameEngine engine = new GameEngine(20, 20);
        Point headBefore = engine.getSnake().peekFirst();
        engine.step();
        Point headAfter = engine.getSnake().peekFirst();
        assertNotEquals(headBefore, headAfter);
    }

    @Test
    void testWrapAround() {
        GameEngine engine = new GameEngine(5, 5);
        engine.setDirection(GameEngine.Direction.LEFT);
        engine.step();
        Point head = engine.getSnake().peekFirst();
        assertEquals(4, head.x);
    }
}
