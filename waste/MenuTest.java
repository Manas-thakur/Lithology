import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;

class MenuTest {
    public static void main(String[] args) {
        MyMenu mn = new MyMenu();
        mn.setVisible(true);
        mn.setSize(400, 400);
    }
}

class MyMenu extends JFrame {
    public static void main(String[] args) {
    }

    JLabel lb;
    JPanel panel;

    MyMenu() {
        panel = new JPanel();
        // panel.add(jmb);
        JMenuBar jmb = new JMenuBar();
        JMenu file = new JMenu("File");
        JMenuItem open = new JMenuItem("Open");
        JMenuItem save = new JMenuItem("Save");
        JMenuItem close = new JMenuItem("Close");
        JMenuItem saveAs = new JMenuItem("saveAs");
        file.add(open);
        file.add(save);
        file.add(close);
        file.add(saveAs);
        JMenu edit = new JMenu("Edit");
        JMenuItem copy = new JMenuItem("Copy");
        JMenuItem cut = new JMenuItem("Cut");
        JMenuItem paste = new JMenuItem("Paste");
        JMenuItem delete = new JMenuItem("Delete");
        JMenuItem undo = new JMenuItem("Undo");
        edit.add(cut);
        edit.add(copy);
        edit.add(paste);
        edit.add(delete);
        edit.add(undo);
        JMenu window = new JMenu("window");
        JMenuItem first = new JMenuItem("first");
        JMenuItem second = new JMenuItem("second");
        JMenuItem third = new JMenuItem("third");
        JMenuItem fourth = new JMenuItem("fourth");
        JMenuItem fifth = new JMenuItem("fifth");
        window.add(second);
        window.add(first);
        window.add(third);
        window.add(fourth);
        window.add(fifth);
        jmb.add(file);
        jmb.add(edit);
        jmb.add(window);
        add(jmb);
        panel.add(jmb);
        add(panel);
    }

}