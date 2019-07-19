echo "Running Ansible Playbooks"
ansible-playbook generate_certificate.yml
ansible-playbook install_node_nginx.yml -i hosts
ansible-playbook run_mock.yml -i hosts
