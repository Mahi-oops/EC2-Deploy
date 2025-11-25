package com.example.snake;

import javax.swing.*;

public class SnakeApp {
    public static void main(String[] args) {
        GameEngine engine = new GameEngine(25, 25);
        GamePanel panel = new GamePanel(engine);

        JFrame frame = new JFrame("Snake Game");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(panel);
        frame.pack();
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);

        Thread gameThread = new Thread(panel);
        gameThread.start();
    }
}
