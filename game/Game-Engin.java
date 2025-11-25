package com.example.snake;

import java.awt.Point;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Random;

public class GameEngine {
    public enum Direction {UP, DOWN, LEFT, RIGHT}

    private final int cols;
    private final int rows;
    private final Deque<Point> snake = new ArrayDeque<>();
    private Point food;
    private Direction dir = Direction.RIGHT;
    private boolean growNextMove = false;
    private final Random rnd = new Random();
    private boolean alive = true;

    public GameEngine(int cols, int rows) {
        this.cols = cols;
        this.rows = rows;
        reset();
    }

    public void reset() {
        snake.clear();
        int cx = cols / 2;
        int cy = rows / 2;
        snake.addFirst(new Point(cx, cy));
        snake.addLast(new Point(cx - 1, cy));
        snake.addLast(new Point(cx - 2, cy));
        dir = Direction.RIGHT;
        alive = true;
        placeFood();
    }

    public void setDirection(Direction newDir) {
        if ((dir == Direction.LEFT && newDir == Direction.RIGHT) ||
            (dir == Direction.RIGHT && newDir == Direction.LEFT) ||
            (dir == Direction.UP && newDir == Direction.DOWN) ||
            (dir == Direction.DOWN && newDir == Direction.UP)) {
            return;
        }
        this.dir = newDir;
    }

    public void step() {
        if (!alive) return;
        Point head = snake.peekFirst();
        Point next = new Point(head.x, head.y);
        switch (dir) {
            case UP -> next.y -= 1;
            case DOWN -> next.y += 1;
            case LEFT -> next.x -= 1;
            case RIGHT -> next.x += 1;
        }

        if (next.x < 0) next.x = cols - 1;
        if (next.x >= cols) next.x = 0;
        if (next.y < 0) next.y = rows - 1;
        if (next.y >= rows) next.y = 0;

        for (Point p : snake) {
            if (p.equals(next)) {
                alive = false;
                return;
            }
        }

        snake.addFirst(next);
        if (next.equals(food)) {
            growNextMove = true;
            placeFood();
        }
        if (!growNextMove) {
            snake.removeLast();
        } else {
            growNextMove = false;
        }
    }

    public Deque<Point> getSnake() { return new ArrayDeque<>(snake); }
    public Point getFood() { return new Point(food); }
    public boolean isAlive() { return alive; }
    public int getCols() { return cols; }
    public int getRows() { return rows; }

    private void placeFood() {
        while (true) {
            int x = rnd.nextInt(cols);
            int y = rnd.nextInt(rows);
            Point p = new Point(x, y);
            boolean onSnake = false;
            for (Point s : snake) if (s.equals(p)) { onSnake = true; break; }
            if (!onSnake) { food = p; return; }
        }
    }
}
