package com.example.snake;

import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;

public class GamePanel extends JPanel implements Runnable {
    private final GameEngine engine;
    private final int tile = 20;
    private volatile boolean running = true;
    private int fps = 8;

    public GamePanel(GameEngine engine) {
        this.engine = engine;
        setPreferredSize(new Dimension(engine.getCols() * tile, engine.getRows() * tile));
        setBackground(Color.BLACK);
        setFocusable(true);

        addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                switch (e.getKeyCode()) {
                    case KeyEvent.VK_UP -> engine.setDirection(GameEngine.Direction.UP);
                    case KeyEvent.VK_DOWN -> engine.setDirection(GameEngine.Direction.DOWN);
                    case KeyEvent.VK_LEFT -> engine.setDirection(GameEngine.Direction.LEFT);
                    case KeyEvent.VK_RIGHT -> engine.setDirection(GameEngine.Direction.RIGHT);
                }
            }
        });
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2 = (Graphics2D) g;

        Point f = engine.getFood();
        g2.setColor(Color.RED);
        g2.fillRect(f.x * tile, f.y * tile, tile, tile);

        g2.setColor(Color.GREEN);
        for (Point p : engine.getSnake()) {
            g2.fillRect(p.x * tile, p.y * tile, tile - 1, tile - 1);
        }

        if (!engine.isAlive()) {
            g2.setColor(Color.WHITE);
            g2.setFont(new Font("SansSerif", Font.BOLD, 24));
            g2.drawString("Game Over", getWidth() / 2 - 60, getHeight() / 2);
        }
    }

    @Override
    public void run() {
        while (running) {
            engine.step();
            repaint();
            try {
                Thread.sleep(1000 / fps);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }

    public void stop() { running = false; }
}
